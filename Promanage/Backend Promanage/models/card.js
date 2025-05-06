const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            required: true,
        },
        checklists: [
            {
                text: { type: String, required: true },
                isChecked: { type: Boolean, default: false },
            },
        ],
        dueDate: { type: Date },
        assignedUsers: [
            {
                type: String,
                required: true,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("card", cardSchema);
