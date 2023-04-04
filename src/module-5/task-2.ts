import { randomUUID } from "crypto";

type UserResponse = {
  id: number,
  name: string,
  registrationDate: string,
}

type AuthResponse = {
  id: number;
  avatar: string;
  name: string;
  login: string;
  user_token: string; 
}

type SomeOtherResponse = {
  field1: string;
  field2: string;
  field3: string;
}

/** Новое */
type ReponseAfterApiRefactoring<TData, TMeta> = {
  data: TData,
  meta: TMeta,
}

type UserReponseAfterApiRefactoring = {
  data: UserResponse,
  meta: MetaTrackMessage,
}

type MetaTrackMessage = {
  trackId: string, // айди трекера логирования
  trackerUrl: string, // юрл трекера логирования
}

type LoadMetaMessage = {
  currentNodeId: string, // текущий сервер, с которым установлено соединение
  currentNodeLoad: number // 0-100, текущая загрузка ноды
}

/** Новое */
class UserApiMigrator<TOld, TNew extends ReponseAfterApiRefactoring<TOld, MetaTrackMessage>> {
  public migrate(items: TOld[]): TNew[] {
    return items.map((item: TOld) => {
      return {
        data: item,
        meta: {
          trackId: randomUUID(),
          trackerUrl: 'someTrackerUrl',
        }
      } as TNew
    });
  }
}

class SomeExternalApi {
  public static getUsers(): UserResponse[] {
      return [
          {
              "id": 47,
              "name": "Stanley",
              "registrationDate": "2020-07-12 08:11:45"
          },
          {
              "id": 48,
              "name": "Donald",
              "registrationDate": "2021-02-15 10:56:51"
          },
          {
              "id": 49,
              "name": "Kate",
              "registrationDate": "2020-08-30 14:17:23"
          },
          {
              "id": 50,
              "name": "Jeffrey",
              "registrationDate": "2021-07-22 12:22:50"
          },
          {
              "id": 51,
              "name": "Sue",
              "registrationDate": "2021-10-23 17:50:53"
          },
          {
              "id": 52,
              "name": "Mabelle",
              "registrationDate": "2021-11-30 05:30:07"
          }
      ]
  }


  public static auth(): AuthResponse {
      return {
          id: 124,
          avatar: "<http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png>",
          name: "Johanna",
          login: "Johanna206",
          user_token: "eYEuVgUlDvRXgHR"
      }
  }


  public static getSomeOther(): SomeOtherResponse[] {
      return [
          {
              "field1": "7pfE0oQFUZJg",
              "field2": "rS9bzwuy8qb1U",
              "field3": "2vLYGgE"
          },
          {
              "field1": "vS",
              "field2": "Dl",
              "field3": "6JB28Del"
          },
          {
              "field1": "WVA",
              "field2": "9EAQk5w1sk0N8sm7j2d",
              "field3": "BFTkEIrJFzSCfo"
          },
          {
              "field1": "YDefs7phiN",
              "field2": "YDm4VYDfk2IrTgv",
              "field3": "OS9Pt8P7"
          },
          {
              "field1": "L1j",
              "field2": "BN3uUQIK3E3",
              "field3": "vV6jmUXNFlbM"
          },
          {
              "field1": "3R0BjEfiWKeyRG0",
              "field2": "cyVXpE6POSSZ6",
              "field3": "7NPSsdVD"
          },
          {
              "field1": "Sqny0mSDCByG",
              "field2": "st4Ork5nT7QvK4",
              "field3": "qizTiz"
          }
      ]
  }
}

const migrator: UserApiMigrator<UserResponse, UserReponseAfterApiRefactoring> 
  = new UserApiMigrator<UserResponse, UserReponseAfterApiRefactoring>();

console.log(SomeExternalApi.getUsers());
console.log(migrator.migrate(SomeExternalApi.getUsers()));