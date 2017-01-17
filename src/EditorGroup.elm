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
   div [ class "editor-group" ] [
       div [] [
           textarea [ class "html code-textarea", cols 40, rows 10, placeholder "HTML", value model.html, onInput ChangedHTML ] [],
           textarea [ class "css code-textarea", cols 40, rows 10, placeholder "CSS", value model.css, onInput ChangedCSS ] [],
           textarea [ class "js code-textarea", cols 40, rows 10, placeholder "JS", value model.js, onInput ChangedJS ] []
       ],
       div [] [
           iframe [iframeStyle, class "code-result_iframe", seamless <| True, srcdoc <| getFinalResult <| model] [],
           text <| model.html
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
