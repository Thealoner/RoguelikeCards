import React, { PureComponent } from 'react';
import Tile from './Tile/Tile';
import './Playboard.scss';
import sampleTiles from './sampleTiles';

class Playboard extends PureComponent {
  state = {
    height: 3,
    width: 3,
    tiles: null,
    player: {
      idx: 4
    }
  };

  drawTile = (tile, idx) => {
    return <Tile key={idx} details={tile} />;
  }

  drawBoard = () => {
    const { height, width, tiles, player } = this.state;
    const board = [];

    for (var i = 0; i < height; i++) {
      const row = [];

      for (var j = 0; j < width; j++) {
        const idx = i * width + j;
        row.push(this.drawTile(tiles[idx], idx));
      }

      board.push(<div className="Playboard-Row" key={i}>{row}</div>);
    }

    return board;
  }

  keyPressed = (e) => {
    const { height, width, tiles, player } = this.state;
    console.log(e.code);

    switch (e.code) {
      case 'ArrowUp':
        if (player.idx >= width) {
          const newTiles = tiles.slice(0);
          const moveTo = player.idx - width;
          newTiles[moveTo] = tiles[player.idx];
          
          this.setState({
            tiles: newTiles,
            player: {
              ...player,
              idx: moveTo
            }
          });
        }
        break;

      case 'ArrowDown':
        if (player.idx <= (height - 1) * width) {
          const newTiles = tiles.slice(0);
          const moveTo = player.idx + width;
          newTiles[moveTo] = tiles[player.idx];

          this.setState({
            tiles: newTiles,
            player: {
              ...player,
              idx: moveTo
            }
          });
        }
        break;

      case 'ArrowLeft':
        if (player.idx % width > 0) {
          const newTiles = tiles.slice(0);
          const moveTo = player.idx - 1;
          newTiles[moveTo] = tiles[player.idx];

          this.setState({
            tiles: newTiles,
            player: {
              ...player,
              idx: moveTo
            }
          });
        }
        break;

      case 'ArrowRight':
        if ((player.idx % width + 1) !== 0) {
          const newTiles = tiles.slice(0);
          const moveTo = player.idx + 1;
          newTiles[moveTo] = tiles[player.idx];
          
          this.setState({
            tiles: newTiles,
            player: {
              ...player,
              idx: moveTo
            }
          });
        }
        break;

      default:
    }
  }

  render() {
    const { tiles } = this.state;

    if (!tiles) {
      // TODO: Add loader
      return 'loading...';
    }

    return (
      <div className="Playboard">
        {this.drawBoard()}
      </div>
    )
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressed);

    this.setState({
      tiles: sampleTiles,
      player: {
        idx: 4
      }
    });
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressed);
  }
}

export default Playboard;