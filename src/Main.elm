module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing ( .. )
import Html.Events exposing (..)
import EditorGroup exposing (..)

-- MODEL
type alias AppModel =
    {
        editorGroupModel: EditorGroup.Model

    }

initialModel : AppModel
initialModel =
    { editorGroupModel = EditorGroup.initialModel
    }

init : ( AppModel, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- MESSAGES


type Msg
    = AddNewEditor
    | EditorGroupMsg EditorGroup.Msg



-- VIEW


view : AppModel -> Html Msg
view model =
    div [] [
         div [] [
                button [onClick AddNewEditor] [ text "Add new editor" ]
         ],
         Html.map EditorGroupMsg (EditorGroup.view model.editorGroupModel)
    ]

-- UPDATE


update : Msg -> AppModel -> ( AppModel, Cmd Msg )
update msg model =
    case msg of
        AddNewEditor ->
            Debug.log "add new editor"
            (model, Cmd.none)
        EditorGroupMsg subMsg ->
          let
               ( updatedEditorGroupModel, editorGroupCmd ) =
              EditorGroup.update subMsg model.editorGroupModel
          in
              ( { model | editorGroupModel = updatedEditorGroupModel }, Cmd.map EditorGroupMsg editorGroupCmd )




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