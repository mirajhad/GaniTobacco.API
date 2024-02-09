import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Rate } from "../models/rate.model.js";

const addRate = asyncHandler(async (req, res) =>{
const {item, category,price} = req.body;
if(
    [item,category,price].some(
        (field)=>field?.trim()==""
        )
)
{
    throw new ApiError(400,"All fields are required");
}

try {
    await Rate.create({
        item,
        category,
        price
    });
    res.status(201).json(new ApiResponse(201,"Rate added successfully"));
} catch (error) {
    res.status(500).json({ error: error.message });
}


});

const getAllRates = asyncHandler(async (req, res) =>{
    try {
        const rates = await Rate.find();
        res.status(200).json(new ApiResponse({
            status: 200,
            message: "Rates fetched successfully",
            data: rates
        }));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
export{addRate, getAllRates}