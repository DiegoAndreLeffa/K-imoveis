import { z } from "zod";

const createSchedules = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

const returnCreateSchedules = createSchedules.extend({
  id: z.number(),
  userId: z.number(),
});

export { createSchedules, returnCreateSchedules };
