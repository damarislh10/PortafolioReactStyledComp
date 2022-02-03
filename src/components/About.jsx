import React, { Component } from "react";
import {AboutS,Avatar,Img,Name,H2,Profession,Location,ImgSoc,AboutC} from "../styled/AboutStyled";

class About extends Component {
    render() {
        return (

            <AboutS>
                <AboutC>
                    <Avatar>
                        <figure>
                            <Img
                                src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643910937/perfilMio/fotomia_hlwghh.jpg"
                                alt="PerfilFoto" />
                        </figure>
                    </Avatar>
                    <Name>
                        <H2>Damaris Lizeth Hernandez Cortez</H2>
                    </Name>
                    <Profession>
                        <p>Desarrolladora frontend Jr</p>
                    </Profession>
                    <Location>
                        <p>Creciendo y mejorando cada dìa</p>
                        <p>Bogota, Colombia</p>
                    </Location>
                    <div className="About-social">
                        <ImgSoc src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643915322/perfilMio/Facebook_f_logo__282019_29_to3vou.svg" alt="facebook" />
                        <ImgSoc src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643915397/perfilMio/1200px-Twitter-logo.svg_kq8oka.png" alt="twitter" />
                        <ImgSoc src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643915531/perfilMio/800px-LinkedIn_logo_initials_xq41gf.png" alt="linkedin" />
                        <ImgSoc src="https://res.cloudinary.com/df90q7vvj/image/upload/v1643915518/perfilMio/25231_jmq1wr.png" alt="gitHub" />
                    </div>
                </AboutC>
            </AboutS>

        );
    }
}

export default About;
