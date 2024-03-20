import PropTypes from 'prop-types'
//Recibe el titulo y la url
export const GifItem = ({title,url}) => {
    return(
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
//Propiedades de los Items
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};