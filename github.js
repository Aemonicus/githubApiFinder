class GitHub {
  constructor(){
    this.client_id = '7cd84062997e2f7d636a';
    this.client_secret = 'b1f48f741104d7c825b9e231c0dd8dc5b5747533';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return{
      profile,
      repos
    }
  }

}