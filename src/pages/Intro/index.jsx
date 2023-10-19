import Frame from "arwes/lib/Frame/Frame.js";
import {createTheme} from "arwes";
import Button from "arwes/lib/Button/index.js";
import Card from "../../components/Card/index.jsx";

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
                <Card />
            </div>
        </Frame>
    );
}
