type Props = {
    embedId: string
}

const YoutubeEmbed = ({ embedId }: Props) => (
    <div className="video-responsive">
        <iframe
            width="450"
            height="280"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded youtube"
        />
    </div>
)

export default YoutubeEmbed
