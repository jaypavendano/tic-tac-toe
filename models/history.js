import mongoose from 'mongoose';

const GamesSchema = new mongoose.Schema({
  status: { type: String, required: true },
  board: { type: [String], required: true },
});

const HistorySchema = new mongoose.Schema(
  {
    playerOne: { type: String, required: true },
    playerTwo: { type: String, required: true },
    totalPlayedGames: { type: Number, required: true },
    playerOneTotalWins: { type: Number, required: true },
    playerTwoTotalWins: { type: Number, required: true },
    games: { type: [GamesSchema], required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.History ||
  mongoose.model('History', HistorySchema);
