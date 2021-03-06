import React from 'react';


// import MainStore from './components/store';
import {observer} from 'mobx-react';

@observer
class TmFeatures extends React.Component{
  render (){
    return (
      <div class="row" id="tmFeatures">
        <div class="col-lg-4">
          <div class="tm-bg-white-transparent tm-feature-box">
          <h3 class="tm-feature-name">High Performance</h3>
          
          <div class="tm-feature-icon-container">
              <i class="fas fa-3x fa-server"></i>
          </div>

          <p class="text-center">Download and use this layout for your sites. Total 5 HTML pages included.</p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="tm-bg-white-transparent tm-feature-box">
              <h3 class="tm-feature-name">Fast Support</h3>

              <div class="tm-feature-icon-container">
                  <i class="fas fa-3x fa-headphones"></i>
              </div>
              <p class="text-center">You are allowed to use this for commercial purpose or personal site.
              </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="tm-bg-white-transparent tm-feature-box">
              <h3 class="tm-feature-name">App Marketing</h3>

              <div class="tm-feature-icon-container">
                  <i class="fas fa-3x fa-satellite-dish"></i>
              </div>
              <p class="text-center">You are NOT allowed to redistribute this template on any download site.
              </p>
          </div>
        </div>
      </div>

    );
  }
}

export default TmFeatures;
