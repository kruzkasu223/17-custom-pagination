export type PlayersResponse = {
  data: Player[]
  meta: Meta
}

export type Player = {
  id: number
  first_name: string
  height_feet: number | null
  height_inches: number | null
  last_name: string
  position: string
  team: Team
  weight_pounds: number | null
}

export type Team = {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
}

export type Meta = {
  total_pages: number
  current_page: number
  next_page: number
  per_page: number
  total_count: number
}
