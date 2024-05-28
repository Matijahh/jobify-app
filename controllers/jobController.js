import "express-async-errors";
import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`No job with the id of ${id}.`);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findOneAndUpdate(id, req.body, { new: true });
  if (!updatedJob) throw new NotFoundError(`No job with the id of ${id}.`);
  res.status(StatusCodes.OK).json({ message: "Job updated", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) throw new NotFoundError(`No job with the id of ${id}.`);

  res.status(StatusCodes.OK).json({ message: "Job Deleted", job: removedJob });
};
