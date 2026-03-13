function SkillsCard({title, items}) {
    return (
        <div className="skillsCard_box">

            <div className="skillsCard">
                <h3 className="skillsCard_title">
                    {title}
                </h3>
                <div className="skillsCard_body">

                    <div className="skillsCard_icons">
                        {items.map((skill) => (
                            <div className="skillsCard_iconBox" key={skill.name}>
                                <img src={skill.img} alt={skill.name} className="skillsCard_icon"/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="skillsCard_hover">
                <h3 className="skillsCard_title">
                    {title}
                </h3>
                <div className="skillsCard_body">

                    <ul className="skillsCard_list">
                        {items.map((skill) => (
                            <li className="skillsCard_name" key={skill.name}>
                                {skill.name}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default SkillsCard