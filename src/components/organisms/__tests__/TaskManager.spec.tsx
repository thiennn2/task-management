import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import TaskManager from "../TaskManager";

test("Task Manager should be render", async () => {
  const { getByText } = render(<TaskManager />);
  await expect.element(getByText("Task Manager")).toBeInTheDocument();
});
