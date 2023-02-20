import React, { Component } from 'react'

class About extends Component {
    state = {  } 
    render() { 
        return (
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">About Us</h1>

                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nibh a felis finibus finibus. Morbi nec leo metus. Integer vel odio eget lacus elementum malesuada. Suspendisse potenti. Aliquam erat volutpat. Vivamus sollicitudin malesuada augue eu finibus. Duis tincidunt, velit eget convallis faucibus, ipsum purus suscipit nunc, eget vestibulum nisl leo in ipsum. Ut ac nisi vitae justo lobortis sagittis. Quisque vitae consequat ex. In eget enim et est convallis venenatis in vitae turpis. Maecenas semper nisi eu nibh fermentum dictum. Sed tincidunt magna velit, eu auctor enim maximus vel. Nam tincidunt diam ac enim cursus, non suscipit urna blandit. Etiam bibendum, velit vel vestibulum ultricies, sapien mi faucibus lacus, eget feugiat nibh nisl ac nisl. Mauris eu interdum est.</p>
                </div>
                <div>
                  <img className='w-25 h-25' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='unknown'></img>
                </div>
            </div>
          </div>
        );
    }
}
 
export default About; 