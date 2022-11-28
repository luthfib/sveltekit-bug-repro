import { invalid } from "@sveltejs/kit";

export const actions = {
  validate: async ({ request }: { request: Request }) => {
    console.log("in here");
    let success = true;

    const formData = await request.formData();
    let data = {};

    for (let [key, val] of formData.entries()) {
      let isBlank = false;
      if (!val) {
        isBlank = true;
      }
      data[key] = { value: val, status: isBlank };
    }

    if (!success) {
      return invalid(400, data);
    }

    return data;
  },
};
