export default class PostService {
  constructor(postProvider) {
    this.postProvider = postProvider;
  }

  async postTitlesOfMostPostingUser() {
    const allPosts = await this.postProvider.getPosts();

    if (!Array.isArray(allPosts)) {
      throw new Error('Invalid argument. The allPosts variable must return an array');
    }

    if (allPosts.length == 0) {
      throw new Error('No Data');
    }

    if (!allPosts.every((post) => post.userId && post.title)) {
      throw new Error('Bad argument');
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // If the userId of the current user is not found in the accumulator, it is added to the accumulator.
    // Else it is incremented by one in the accumulator. Thus, how many posts each user has shared is found.
    const numberOfPostsUserHaveShared = allPosts.reduce((acc, curr) => {
      if (typeof acc[curr.userId] == 'undefined') {
        acc[curr.userId] = 1;
      } else {
        acc[curr.userId] += 1;
      }

      return acc;
    }, {});

    const mostPostingUserId = Object.entries(numberOfPostsUserHaveShared).sort((a, b) => b[1] - a[1])[0][0];

    const postTitles = allPosts.filter((post) => post.userId == mostPostingUserId).map((post) => post.title);

    return postTitles;
  }
}
