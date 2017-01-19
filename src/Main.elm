port module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing ( .. )
import Html.Events exposing (..)
import EditorGroup exposing (..)
import Dict exposing (..)
-- MODEL
type alias AppModel =
    {
        editorGroups: Dict Int EditorGroup.Model

    }

initialModel : AppModel
initialModel =
    { editorGroups =
        Dict.fromList
            [( 1, EditorGroup.initialModel )
            ]
    }

init : ( AppModel, Cmd Msg )
init =
    ( initialModel, newEditorAdded <| getNewIndex <| 1 )



-- MESSAGES


type Msg
    = AddNewEditor
    | EditorGroupMsg Int EditorGroup.Msg



-- VIEW


view : AppModel -> Html Msg
view model =
    div []
         ([div [] [
                button [onClick AddNewEditor] [ text "Add new editor" ]
           ]
         ]
         ++(model.editorGroups
            |> Dict.toList
            |> List.map
                (\ (id, editorChild) -> Html.map (EditorGroupMsg id)
                    <| div [class <| getNewIndex <| id] [ EditorGroup.view editorChild ]))

         )
--         Html.map EditorGroupMsg (EditorGroup.view model.editorGroups)


update : Msg -> AppModel -> ( AppModel, Cmd Msg )
update msg model =
    case msg of
        AddNewEditor ->
            let
                nextId =
                    Dict.size model.editorGroups + 1

                insertModel =
                    Dict.insert nextId EditorGroup.initialModel model.editorGroups
            in
               ( { model | editorGroups = insertModel }, newEditorAdded <| getNewIndex <| nextId)
        EditorGroupMsg subId subMsg ->
            case Dict.get subId model.editorGroups of
                Nothing ->
                    (model, Cmd.none)
                Just editorGroup ->
                    let
                        ( updatedEditorGroupModel, editorGroupCmd ) =
                                EditorGroup.update subMsg editorGroup
                        updatedEditorGroups =
                            Dict.insert subId updatedEditorGroupModel model.editorGroups

                    in
                        ( { model | editorGroups = updatedEditorGroups}, Cmd.none )

getEditorSize: Dict Int EditorGroup.Model -> Int
getEditorSize dict =
    (Dict.size dict) + 1

getNewIndex: Int -> String
getNewIndex index =
    "editor" ++ (toString <| index)
-- PORTS
port newEditorAdded: String -> Cmd msg


-- SUBSCRIPTIONS
subscriptions : AppModel -> Sub Msg
subscriptions model =
    Sub.none



-- MAIN


main : Program Never AppModel Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }