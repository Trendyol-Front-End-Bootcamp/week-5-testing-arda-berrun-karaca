import PostProvider from '../../src/services/post-provider';
import PostService from '../../src/services/post-service';

jest.mock('../../src/services/post-provider');

describe('Post Service Testing', () => {
  const postProvider = new PostProvider();
  const postService = new PostService(postProvider);

  describe('Post Service Errors', () => {
    it('should throw an error when post data is not array', () => {
      postProvider.getPosts.mockImplementation(() => {
        return Promise.resolve({});
      });

      return expect(() => postService.postTitlesOfMostPostingUser()).rejects.toThrow('Invalid argument. The allPosts variable must return an array');
    });

    it('should throw an error when post data is an empty array', () => {
      postProvider.getPosts.mockImplementation(() => {
        return Promise.resolve([]);
      });

      return expect(() =>
        postService.postTitlesOfMostPostingUser()
      ).rejects.toThrow('No Data');
    });

    it('should throw an error when the data has not userId or title property', () => {
      postProvider.getPosts.mockImplementation(() => {
        return Promise.resolve([
          {
            id: 1,
            body: 'lorem 1',
          },
          {
            id: 2,
            body: 'lorem 2',
          },
          {
            id: 1,
            body: 'lorem ipsum 1',
          },
          {
            id: 3,
            body: 'lorem ipsum 3',
          },
        ]);
      });

      return expect(() =>
        postService.postTitlesOfMostPostingUser()
      ).rejects.toThrow('Bad argument');
    });
  });
  it('should return post titles of most posting user', async () => {
    postProvider.getPosts.mockImplementation(() => {
      return Promise.resolve([
        {
          userId: 1,
          title: 'lorem 1',
        },
        {
          userId: 2,
          title: 'lorem 2',
        },
        {
          userId: 1,
          title: 'lorem ipsum 1',
        },
        {
          userId: 3,
          title: 'lorem ipsum 3',
        },
      ]);
    });

    expect(await postService.postTitlesOfMostPostingUser()).toEqual([
      'lorem 1',
      'lorem ipsum 1',
    ]);
  });
});
