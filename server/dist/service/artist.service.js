"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artist_repository_1 = require("../repository/artist.repository");
let ArtistService = class ArtistService {
    constructor(artistrepository) {
        this.artistrepository = artistrepository;
    }
    async create(artist) {
        return await this.artistrepository.save(artist);
    }
    async getall() {
        return await this.artistrepository.createQueryBuilder("artist")
            .getMany();
    }
    async getone(_id) {
        const artist = await this.artistrepository.createQueryBuilder("artist")
            .where("artist.id=:id", { id: _id })
            .getOne();
        return artist;
    }
    async createfortrack(track, artist) {
        track.artists = [...track.artists, artist];
        return await track.save();
    }
};
ArtistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(artist_repository_1.ArtistRepository)),
    __metadata("design:paramtypes", [artist_repository_1.ArtistRepository])
], ArtistService);
exports.ArtistService = ArtistService;
//# sourceMappingURL=artist.service.js.map