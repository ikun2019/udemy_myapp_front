<script>
// ページをレンダリングする前にレンダリングされる
// nuctServerInitの後asyuncDataの前
export default {
  middleware ({ redirect }) {
    return redirect('/')
  }
}
</script>
