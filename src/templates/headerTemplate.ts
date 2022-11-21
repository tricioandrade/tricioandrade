import profile from './profile-pic.png';

export const template = document.createElement('template');

template.innerHTML = `
    <style> 
        * {
            margin: 0;
            padding: 0;
        }        
        img {
            margin-left: -43px;
            z-index: 1;
        }
        #header-content {
            position: relative;
            height: 100vh;
            background: url("${profile}");
            background-position: bottom;
            background-size: contain;
            background-repeat: no-repeat;
            background-origin: border-box;
        }
    </style> 
    
    <div id="header-content">  
        <div class=""> 
            <div class=" "> 
            </div>
        </div>
    </div>
`;
