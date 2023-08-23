import TextHeader from '../atoms/TextHeader';

import './Article.scss';

const Article = ({ isDotted, children, headerText, headerStyles }) => {
    return (
        <div className={isDotted ? "container-dotted" : "wrapper-container"}>
            {
                isDotted ?
                    <>
                        <div className={`container-article_dotted`}></div>
                        <div className="container-article_content">
                            <TextHeader styles={headerStyles}>{headerText}</TextHeader>
                            <div className="content-cards">
                                {children}
                            </div>
                        </div>
                    </> :
                    <>
                        <div className="container-article">
                            <TextHeader styles={headerStyles}>{headerText}</TextHeader>
                            {children}
                        </div>
                    </>
                
            }
        </div>
    );
}

export default Article;