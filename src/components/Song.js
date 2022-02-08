const Song = (props) => {
  const { song } = props;
  return (
    <div className="song" key={song.time}>
      <h1>{song.title}</h1>
      <h2>{song.artist}</h2>
      <h3>{song.time}</h3>
    </div>
  );
};

export default Song;
