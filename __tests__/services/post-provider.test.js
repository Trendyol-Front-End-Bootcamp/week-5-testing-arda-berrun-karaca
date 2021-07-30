import PostProvider from "../../src/services/post-provider";
import axios from "axios";

jest.mock("axios");

describe("Post Provider Testing", () => {
  const postProvider = new PostProvider();
  it("should return all posts", async () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: [
          {
            userId: 1,
            id: 1,
            title: "lorem 2",
            body: "lorem 21oı12",
          },
          {
            userId: 3,
            id: 2,
            title: "lorem ipsum opffs",
            body: "lorem ipsum dolor sit amet",
          },
        ],
      });
    });

    expect(await postProvider.getPosts()).toEqual([
      {
        userId: 1,
        id: 1,
        title: "lorem 2",
        body: "lorem 21oı12",
      },
      {
        userId: 3,
        id: 2,
        title: "lorem ipsum opffs",
        body: "lorem ipsum dolor sit amet",
      },
    ]);
  });

  it('should throw an error when the api request failed', () => {
    axios.get.mockImplementation(() => {
      return Promise.reject('error');
    });

    expect(async () => await postProvider.getPosts()).rejects.toThrow('error');
  });
});
