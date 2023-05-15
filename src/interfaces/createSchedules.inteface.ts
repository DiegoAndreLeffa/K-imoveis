import { z } from "zod";
import { createSchedules, returnCreateSchedules } from "../schema";

type SchedulesCreate = z.infer<typeof createSchedules>;
type SchedulesReturn = z.infer<typeof returnCreateSchedules>;

export { SchedulesCreate, SchedulesReturn };
