import './skills.css';

let Skills = ({data,title}) => {
    return (
        <div className='container'>
            <h2>{title}</h2>
            <ul>
                {
                    Object.entries(data).map(([category, items]) => (
                        <li key={category}>
                            <p className='category'>{category}</p>
                            {
                                items.map((item, index) => (
                                <span>{item}  </span>
                                ))
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Skills;