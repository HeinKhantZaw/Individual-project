import Frame from "arwes/lib/Frame/Frame.js";
import {createTheme} from "arwes";
import Card from "../../components/Card";

export default function Intro() {
    return (
        <Frame
            show={true}
            animate={true}
            level={3}
            corners={4}
            layer='primary'
            theme={createTheme()}
            classes={{}}
        >
            <div className={"inset-center"}>
                <Card isIntro={true} title={"Welcome!"} message={"Click Enter To Continue"}/>
            </div>
        </Frame>
    );
}
