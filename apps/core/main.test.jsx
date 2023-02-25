import { MemoryRouter } from "react-router-dom"
import { App } from "./App"
describe("hello world", () => {
  it("should render hello world", async () => {
    render(<App />, { wrapper: MemoryRouter })
  })
})
