

class Article {
  constructor(domElement) {

    this.domElement = domElement ;
  
    this.expandButton = this.domElement.querySelector('.expandButton');

    this.expandButton.textContent = 'expand this';
   
    this.expandButton.addEventListener('click', () => {this.expandArticle()})
  }

  expandArticle() {
   
      this.domElement.classList.toggle('article-open')
  }
}


let articles = document.querySelectorAll('.article');
articles.forEach(function(article){
  return new Article(article)
});