function cartMiddle(){
    return `
    <div id="bottomMiddle">
                    <label id="container1" class="container"><p id="ship" class="radioName">SHIP</p>

                        <p class="radioContent"><span class="red">Purchase now and we'll ship when it's available.</span> <br>
                            Shipping: <span class="underLine">Standard</span><br>
                            Arrives: <span class="underLine red">This item is currently on backorder.</span></p>
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark"></span>
                      </label>
                      <label id="container2" class="container"><p class="radioName">FREE PICKUP</p>
                        <p class="radioContent"><span class="underLine">Select location</span></p>
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                      </label>
                </div>`
}
export default cartMiddle;