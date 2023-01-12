export class Router {
  routes = {}
  body = document.querySelector('body')
  changeBackground(){
    
  }
  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event){
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, '', event.target.href)
  
    this.handle()
  }
  handle(){
    const {pathname} = window.location
    const route = this.routes[pathname] || this.routes[404]
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
      if(route == '/views/home.html' ){
        this.body.classList.add('first')
        this.body.classList.remove('second')
        this.body.classList.remove('third')
      }else if(route == '/views/universe.html'){
        this.body.classList.remove('first')
        this.body.classList.add('second')
        this.body.classList.remove('third')
      }else{
        this.body.classList.remove('first')
        this.body.classList.remove('second')
        this.body.classList.add('third')
      }
    })
  }

}

