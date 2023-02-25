import Dashboard from './Dashboard'
import utils from 'utils'
describe("hello world", () => {
  it("should render hello world", async () => {
    render(<Dashboard />)
  })

  it("should throw error when import is done incorrectly", async () => {
    console.log(utils)
    // expect(import('utils')).not.toThrow()
    // expect(import('utils/do-not-import-me')).resolves.toThrow()
  })
})
