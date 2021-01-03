import React from "react";

import rsaf140 from "../../assets/images/rsaf140.jpeg";
import genuslogo from "../../assets/images/genuslogo.png";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Training Mobile Application (RSAF)",
                    subtitle: "Achieved Gold under TEA 2019 by Singapore Productivity Association\n" 
                    + "Resulted in $74,802.84 annual savings for RSAF\n"
                    + "Written in Outsystems\n"
                    + "Sole Developer",
                    imgSrc: rsaf140,
                    link: "https://drive.google.com/file/d/1Vl80g_2QjBE0EPw5XaokM6dbvzo9_kzP/view?usp=sharing",
                    selected: false
                },
                {
                    id: 1,
                    title: "NUS Guitar Ensemble Attendance Bot",
                    subtitle: "Automated attendance taking of ~50 members\n"
                    + "Provides analytical report on attendance for Exco\n"
                    + "Written in Java with Telegram and GoogleSheets API\n"
                    + "Sole Developer",
                    imgSrc: genuslogo,
                    link: "https://docs.google.com/document/d/1JJDEA7rMCy2cc3Pwsxt2hTmgOo_4vtiRsymgigp9EWc/edit?usp=sharing",
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;