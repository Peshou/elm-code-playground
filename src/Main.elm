module Main exposing (..)

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
    ( initialModel, Cmd.none )



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
         ++(model.editorGroups |> Dict.toList |> List.map (\ (id, editorChild) -> Html.map (EditorGroupMsg id) <| EditorGroup.view editorChild))
         )
--         Html.map EditorGroupMsg (EditorGroup.view model.editorGroups)


update : Msg -> AppModel -> ( AppModel, Cmd Msg )
update msg model =
    case msg of
        AddNewEditor ->
            Debug.log "add new editor"
            (model, Cmd.none)
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