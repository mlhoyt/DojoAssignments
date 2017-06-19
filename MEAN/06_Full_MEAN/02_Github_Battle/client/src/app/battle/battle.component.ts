import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerApiService } from '../player-api.service';
import { GithubApiService } from '../github-api.service';
import { Player1DataService } from '../player1-data.service';
import { Player2DataService } from '../player2-data.service';
import { AllPlayersDataService } from '../all-players-data.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  all_players: Array<Player>;
  player1: Player = new Player();
  player2: Player = new Player();

  constructor(
    private _playerApi: PlayerApiService,
    private _githubApi: GithubApiService,
    private _player1DataService: Player1DataService,
    private _player2DataService: Player2DataService,
    private _allPlayersDataService: AllPlayersDataService,
  )
  {
    this._player1DataService.subject.next( this.player1 );
    this._player2DataService.subject.next( this.player2 );
    this.get_all_players();
  }

  ngOnInit() {
  }

  get_all_players() {
    this._playerApi.read_all()
      .catch( err => { console.log( "Error: AppBattleComponent: get_all_players:", err ); } )
      .then( data => {
        this.all_players = data;
        this._allPlayersDataService.subject.next( this.all_players );
      });
  }

  have_player( player: Player ) {
    for( let i = 0; i < this.all_players.length; ++i ) {
      if( this.all_players[ i ].username === player.username ) {
        player.avatar_url = this.all_players[ i ].avatar_url;
        player.score = this.all_players[ i ].score;
        player.isInvalid = false;
        player.isLoaded = true;
        return( true );
      }
    }
    return( false );
  }

  get_user( player ) {
    if( ! this.have_player( player ) ) {
      this._githubApi.read_user( player.username )
        .catch( err => {
          console.log( "Error: AppBattleComponent: get_user:", player.username, "not found!" );
          player.avatar_url = "";
          player.score = 0;
          player.isInvalid = true;
          player.isLoaded = false;
        })
        .then( data => {
          if( ! player.isInvalid ) {
            player.avatar_url = data.avatar_url;
            player.score = (data.followers + data.public_repos) * 12;
            player.isInvalid = false;
            player.isLoaded = true;

            this._playerApi.create( player )
              .catch( err => { console.log( "Error: AppBattleComponent: get_user: create_player:", err ); } )
              .then( () => { this.get_all_players(); } );
          }
        });
    }
  }
}
