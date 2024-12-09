import Button from '../utils/Button';
import Card from '../utils/Card';
import './content.css'

const Content = () => {
    return (
        <section className="content">
            <h1 className="content_header">Latest News</h1>
            <div className="content_wrapper">
                <Card title="Title 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus." />
                <Card title="Title 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus." />
                <Card title="Title 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus." />
            </div>
            <div className='content_button_wrapper'>
                <Button className="content_button" link="#" text="read more" />
            </div>
        </section>
    )
}

export default Content;