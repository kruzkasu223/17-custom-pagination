import type { Player } from "../types"

type CardProps = {
  player: Player
}

export const Card = ({ player }: CardProps) => {
  return (
    <div className="card w-96 bg-accent">
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {player?.first_name} {player?.last_name}{" "}
          {player?.position && (
            <div className="tooltip" data-tip={`Position: ${player?.position}`}>
              <div className="badge badge-outline">{player?.position}</div>
            </div>
          )}
        </h2>
        <p>{player?.team?.full_name}</p>
      </div>
    </div>
  )
}
