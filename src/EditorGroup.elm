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
    { html = "<h1>AJDE</h1>",
      css = "h1 {color: #fff;background-color: #000;height: 100px;width: auto;}",
      js = ""
    }



-- MESSAGES


type Msg
    = NoOp
    | ChangedHTML String
    | ChangedCSS String
    | ChangedJS String
    | ClearAll



-- VIEW
iframeStyle : Attribute msg
iframeStyle =
  style
    [ ("marginwidth", "0")
    , ("marginheight", "0")
    ]

view : Model -> Html Msg
view model =
    div []
        [ editorGroup model
        ]

editorGroup : Model -> Html Msg
editorGroup model =
    section [class "editor_section"] [
         div [ class "editor_group" ] [
             div [class "editor_buttons"] [
                button [ class "", onClick ClearAll ] [ text "Clear" ]
             ],
             div [ class "editor_textareas" ] [
                 textarea [ class "html code_textarea", cols 40, rows 10, placeholder "HTML", value model.html, onInput ChangedHTML ] [],
                 textarea [ class "css code_textarea", cols 40, rows 10, placeholder "CSS", value model.css, onInput ChangedCSS ] [],
                 textarea [ class "js code_textarea", cols 40, rows 10, placeholder "JS", value model.js, onInput ChangedJS ] []
             ],
             div [ class "editor_iframe" ] [
                 iframe [iframeStyle, class "code_result_iframe", seamless <| True, srcdoc <| getFinalResult <| model] []
             ]
         ]
    ]

getFinalResult: Model -> String
getFinalResult model =
    String.concat["<style>",model.css,"</style>","<script>",model.js,"</script>", model.html]

-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        NoOp ->
            ( model, Cmd.none )
        (ChangedHTML changes) ->
            ( { model | html = changes },  Cmd.none )
        (ChangedCSS changes) ->
            ( { model | css = changes }, Cmd.none )
        (ChangedJS changes) ->
            ( { model | js = changes } , Cmd.none )
        ClearAll ->
            ( { model | html="", css="", js="" }, Cmd.none)
