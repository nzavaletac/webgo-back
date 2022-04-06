const Event = require("../models/events.models")
const User = require("../models/users.model")

exports.create = async (req, res) => {
  try {
    const {
      body: { userId, ...rest },
    } = req

    const user = await User.findById(userId)
    if (!user) {
      throw new Error("User invalid")
    }

    const event = await Event.create({ ...rest, creator: userId })
    user.events.push(event._id)
    await user.save({ validateBeforeSave: false })

    res.status(201).json({ message: "Event created", event })
  } catch (e) {
    res.status(400).json({ error: e })
  }
}

exports.list = async (req, res) => {
  try {
    const { userId } = req.query
    const events = await Event.find({ creator: userId }).select("title")
    res.status(200).json({ meesage: `${events.length} events found`, events })
  } catch (e) {
    res.status(500).json({ message: "Error server: ", e })
  }
}

exports.show = async (req, res) => {
  const { eventId } = req.params
  try {
    const event = await Event.findById({ _id: eventId }).populate(
      "creator",
      "name lastName"
    )

    if (!event) {
      throw new error("Upss..something was bad")
    }
    res.status(200).json({ meesage: "Event found", event })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}

exports.update = async (req, res) => {
  const {
    body: { userId, ...rest },
    params: { eventId },
  } = req
  try {
    const event = await Event.findOneAndUpdate(
      { _id: eventId, creator: userId },
      rest,
      {
        new: true,
      }
    )
    if (!event) {
      res.status(403).json({ message: "Event did not update" })
      return
    }
    res.status(200).json({ message: "Event updated", event })
  } catch (e) {
    res.status(400).json({ message: "An error has occurred", e })
  }
}

exports.destroy = async (req, res) => {
  try {
    const {
      params: { eventId },
      body: { userId, ...rest },
    } = req
    const event = await Event.findOneAndDelete({
      _id: eventId,
      creator: userId,
    })
    if (!event) {
      res.status(403).json({ message: "Event did not delete" })
    }
    res.status(200).json({ message: "Event deleted", event })
  } catch (e) {
    res.status(400).json({ message: "An error has occurred", e })
  }
}
