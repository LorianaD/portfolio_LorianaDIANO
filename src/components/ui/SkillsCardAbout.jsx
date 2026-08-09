import Badge from "./Badge";

function SkillsCardAbout({title, items}) {
    return (
        <div className="about_skillsCard_box">

            <div className="skillsCard">
                <h4 className="skillsCard_title">
                    {title}
                </h4>
                <div className="about_skillsCard_body">

                    <div className="about_skillsCard_icons">
                        {items.map((skill) => (
                            <div className="skillsCard_Box" key={skill.name}>
                                <Badge>
                                    {skill.name}
                                </Badge>
                            </div>
                            
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SkillsCardAbout