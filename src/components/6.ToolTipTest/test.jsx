import Tooltip from ".";
import './tooltip.css'

function ToooltipTest(){
    return(
        <div>
            <h1>Tooltip</h1>
            <Tooltip delay={1000} children={<p>Hovver Me</p>} content={'Tooltip content'} />
        </div>
    )
}

export default ToooltipTest;