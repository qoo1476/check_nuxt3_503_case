import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  // spend some times for request data...
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, 300);
  });

  return {
    data: "some Data...",
  };
});
