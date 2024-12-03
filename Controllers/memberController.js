import memberModel from "../Models/memberModel.js"

const getMember = async (req,res) => {
    try {
        const members = await memberModel.find({})
        res.json({ success: true, members });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {getMember}