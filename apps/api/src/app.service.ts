import { Injectable } from '@nestjs/common';

import { LanguageNodeEdge } from '@github/types/type-alias';
import { GithubService } from '@github/github.service';

import { buildComponent } from '@utils';
import { HttpError } from '@shared/http-error';
import dynamicCollections, { Node } from '@assets/dynamic-collections';



function escapeSvgMarkup({ node: { name } }: LanguageNodeEdge): Node { 
    if(!dynamicCollections[name]) return

    /** 
     * Attempting to escape the basic SVG markup in order to apply a style to it.
    */
    return {
      name: 'g',
      attributes: {},
      content: '',
      children: [dynamicCollections[name]]
    }
}

@Injectable()
export class AppService {
  constructor(private gitHubService: GithubService){}

  async drawGitHubUserCard(name: string) {
    const languages = await this.selectRepositoryLanguages(name)
    const languagesComponents: Node[] = languages.map(escapeSvgMarkup).filter(Boolean)

    const card = structuredClone(dynamicCollections['interactive-card'])
    const placeOfInsertion = card.children.find((node)=> node.attributes['id'] === "prefix__icons-group" ? true : false)

    if(placeOfInsertion === undefined){
      throw new HttpError("The card structure is not as expected", "INTERNAL_SERVER_ERROR")
    }

    placeOfInsertion.children = placeOfInsertion.children.concat(languagesComponents)
    return buildComponent(card)
  }

  async selectRepositoryLanguages(name: string, overflowBoundary = 10) {
    const { data: { user } } = await this.gitHubService.getUserRepositories(name);

    if(user == null || user.repositories === undefined){
      throw new HttpError("GitHub service returned an empty response", "NOT_FOUND");
    }

    const groupedLanguages = this.gitHubService.groupeByNameLanguage(user.repositories.nodes);
    const languageTirList = this.gitHubService.hideOverflowLanguagesBySize(groupedLanguages, { overflowBoundary });

    return languageTirList
  }
}
