import React, { Component } from 'react';

import { H2Styled } from '../styled/H2Styled';
import { ContSk, ContBar } from '../styled/ContentSkill';

class Skill extends Component {
    render() {
        return (
            <div>
                <ContSk>
                    <H2Styled name="Habilidades" />
                    <div className="Skill-container">
                        <ContBar>
                            <div className="BProgreso">
                                <h2>HTML</h2>
                                <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643923585/perfilMio/barra1_zqwvqm.png" alt="bHtml" />
                            </div>
                            <div className="BProgreso">
                                <h2>CSS</h2>
                                <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643923725/perfilMio/barra2_trgx0l.png" alt="bCss" />
                            </div>
                            <div className="BProgreso">
                                <h2>JavaScript</h2>
                                <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643923928/perfilMio/barra3_w74lwp.png" alt="bJs" />
                            </div>
                            <div className="BProgreso">
                                <h2>ReactJs</h2>
                                <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643924050/perfilMio/barra4_zgh6ci.png" alt="bReactJs" />
                            </div>
                            <div className="BProgreso">
                                <h2>Python</h2>
                                <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643923928/perfilMio/barra3_w74lwp.png" alt="bPython" />
                            </div>
                            <div className="BProgreso">
                                <h2>Java</h2>
                                <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643923928/perfilMio/barra3_w74lwp.png" alt="bJava" />
                            </div>

                        </ContBar>

                    </div>
                </ContSk>
            </div>
        );
    }
}

export default Skill;