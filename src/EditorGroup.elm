module EditorGroup exposing (..)

import Html exposing (..)
import Html.Attributes exposing ( .. )
import Html.Events exposing (..)
import Debug exposing (..)

-- MODEL

type alias Model =
    { html: String
    , css: String
    , js: String
    }


initialModel : Model
initialModel =
    { html = "",
      css = "",
      js = ""
    }



-- MESSAGES


type Msg
    = ChangedHTML String
    | ChangedCSS String
    | ChangedJS String



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ editorGroup
        ]

editorGroup : Html Msg
editorGroup =
   div [ class "editor-group" ] [
       div [] [
           textarea [ class "html code-textarea", cols 40, rows 10, placeholder "HTML", onInput ChangedHTML ] [],
           textarea [ class "css code-textarea", cols 40, rows 10, placeholder "CSS", onInput ChangedCSS ] [],
           textarea [ class "js code-textarea", cols 40, rows 10, placeholder "JS", onInput ChangedJS ] []
       ],
       div [] [
           iframe [ srcdoc initialModel.html ] []
       ]
       ]


-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case Debug.log "The message" message of
        ChangedHTML changes ->
            ( { model | html = changes},  Cmd.none )
        ChangedCSS changes ->
            ( { model | css = changes }, Cmd.none )
        ChangedJS changes ->
            ( { model | js = changes }, Cmd.none )
