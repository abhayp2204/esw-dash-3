import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <a class="navbar-brand" href="#">Team 11</a> */}
            <button class="navbar-toggler" type="button">
                Team 11
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <button class="btn btn-dark" href="#">Home</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark">About</button>
                        {/* onClick={()=>navigate("/about")} */}
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-dark">Team</button>
                        {/* onClick={()=>navigate("/about")} */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar